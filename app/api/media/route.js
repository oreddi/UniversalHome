import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'media.json');

// Helper to read JSON
function readMediaData() {
  try {
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileData);
  } catch (error) {
    return { heroSlides: [] }; // Return default if file doesn't exist
  }
}

// Helper to write JSON
function writeMediaData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section');
  const data = readMediaData();
  
  if (section) {
    if (Array.isArray(data[section])) {
      data[section].sort((a, b) => a.order - b.order);
      return NextResponse.json({ [section]: data[section] });
    }
    return NextResponse.json({ [section]: data[section] });
  }

  // Sort all array sections
  ['heroSlides', 'gallerySlides', 'servicesSlides'].forEach((key) => {
    if (data[key]) {
      data[key].sort((a, b) => a.order - b.order);
    }
  });

  return NextResponse.json(data);
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { action, section, payload } = body;
    const data = readMediaData();

    if (!section) return NextResponse.json({ error: 'Section required' }, { status: 400 });

    if (action === 'REORDER') {
      data[section] = payload;
      writeMediaData(data);
      return NextResponse.json({ success: true, data: data[section] });
    }

    if (action === 'DELETE') {
      const { id } = payload;
      data[section] = data[section].filter((item) => item.id !== id);
      writeMediaData(data);
      return NextResponse.json({ success: true, data: data[section] });
    }
    
    if (action === 'UPDATE_SINGLE') {
      // For single image sections like aboutImage, bedsImage, foodImage
      data[section] = payload;
      writeMediaData(data);
      return NextResponse.json({ success: true, data: data[section] });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Error updating media:', error);
    return NextResponse.json({ error: 'Failed to update media' }, { status: 500 });
  }
}
