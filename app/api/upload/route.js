import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'media.json');
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image');
    const section = formData.get('section'); // e.g. 'heroSlides', 'aboutImage'

    if (!file || !section) {
      return NextResponse.json({ error: 'File and section required.' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    const filePath = path.join(uploadDir, filename);

    fs.writeFileSync(filePath, buffer);
    const imageUrl = `/uploads/${filename}`;

    let mediaData = {};
    try {
      if (fs.existsSync(dataFilePath)) {
        mediaData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
      }
    } catch (e) {
      console.error('Error reading media.json', e);
    }

    // Determine if array or string based on section name
    const isArraySection = ['heroSlides', 'gallerySlides', 'servicesSlides'].includes(section);

    if (isArraySection) {
      if (!mediaData[section]) mediaData[section] = [];
      const newOrder = mediaData[section].length;
      const newItem = {
        id: Date.now().toString(),
        image: imageUrl,
        order: newOrder,
        title: 'New Image',
        category: 'living', // Default fallback for gallery
      };
      mediaData[section].push(newItem);
    } else {
      // Single image update (e.g., aboutImage, bedsImage)
      mediaData[section] = imageUrl;
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(mediaData, null, 2), 'utf8');

    return NextResponse.json({ success: true, data: mediaData[section] });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
