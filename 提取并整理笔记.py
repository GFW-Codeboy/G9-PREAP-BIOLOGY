#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract and organize biology notes from images
This script will process images and create organized content for the website
"""
import os
import json
from pathlib import Path

def process_images_and_create_content():
    """Process all 50 images and organize content"""

    script_dir = Path(__file__).parent
    images_dir = script_dir / "original_images"
    output_file = script_dir / "organized_biology_content.json"

    print("=" * 70)
    print("Biology Notes Content Organizer")
    print("=" * 70)
    print()

    # Get all images
    image_files = sorted(images_dir.glob("biology_note_*.jpg"))
    print(f"Found {len(image_files)} biology note images")
    print()

    # Since we don't have OCR available, we'll create a template structure
    # that you can fill in by looking at the images

    organized_content = {
        "total_images": len(image_files),
        "topics": []
    }

    # Create a template for each set of images
    # Typically biology notes are organized by chapters
    print("Creating content template...")
    print()

    # Group images (assuming ~5-10 images per topic)
    images_per_topic = 10
    num_topics = (len(image_files) + images_per_topic - 1) // images_per_topic

    for topic_idx in range(num_topics):
        start_img = topic_idx * images_per_topic + 1
        end_img = min((topic_idx + 1) * images_per_topic, len(image_files))

        topic = {
            "id": f"chapter-{topic_idx + 1}",
            "title": f"Chapter {topic_idx + 1}",
            "source_images": [f"biology_note_{i:03d}.jpg" for i in range(start_img, end_img + 1)],
            "key_terms": [
                {"term": "Term 1", "definition": "Definition from your notes"},
                {"term": "Term 2", "definition": "Definition from your notes"}
            ],
            "concepts": [
                "Important concept 1 from images",
                "Important concept 2 from images"
            ],
            "exam_points": [
                "Key exam point from notes"
            ]
        }

        organized_content["topics"].append(topic)
        print(f"Topic {topic_idx + 1}: Images {start_img:03d} to {end_img:03d}")

    # Save template
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(organized_content, f, indent=2, ensure_ascii=False)

    print()
    print("=" * 70)
    print("Template created!")
    print("=" * 70)
    print()
    print(f"Output file: {output_file}")
    print()
    print("Next steps:")
    print("1. Open the images in original_images/ folder")
    print("2. Edit organized_biology_content.json with actual content")
    print("3. Or I can help you convert specific images")
    print()
    print("Alternative: Use online OCR tools like:")
    print("  - Google Drive (upload images, open with Google Docs)")
    print("  - https://www.onlineocr.net/")
    print("  - https://www.newocr.com/")

    return organized_content

if __name__ == "__main__":
    process_images_and_create_content()
