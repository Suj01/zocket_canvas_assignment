import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const data = {
    caption: {
        "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
        "position": {
            "x": 50,
            "y": 50
        },
        "max_characters_per_line": 31,
        "font_size": 44,
        "alignment": "left",
        "text_color": "#FFFFFF"
    },
    "cta": {
        "text": "Shop Now",
        "position": {
            "x": 190,
            "y": 320
        },
        "text_color": "#FFFFFF",
        "background_color": "#000000"
    },
    "image_mask": {
        "x": 56,
        "y": 442,
        "width": 970,
        "height": 600
    },
    "urls": {
        "mask": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
        "stroke": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
        "design_pattern": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png"
    }
}

export const Canvas = ({ selectedImage, content, cta, selectedColor }) => {
    useEffect(() => {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');

        // for content

        const drawText = (ctx, text, x, y, maxWidth) => {
            let words = text.split(' ');
            let line = '';
            let lineHeight = ctx.measureText('M').width * 1.2;
            let currentY = y;

            for (let i = 0; i < words.length; i++) {
                let testLine = line + words[i] + ' ';
                let metrics = ctx.measureText(testLine);
                let testWidth = metrics.width;

                if (testWidth > maxWidth && i > 0) {
                    ctx.fillText(line, x, currentY);
                    line = words[i] + ' ';
                    currentY += lineHeight;
                } else {
                    line = testLine;
                }
            }

            ctx.fillText(line, x, currentY);
        };

        ctx.font = `${data.caption.font_size}px Arial`;
        ctx.fillStyle = data.caption.text_color;
        drawText(ctx, content, data.caption.position.x, data.caption.position.y, 700);


        // for cta

        ctx.fillStyle = data.cta.background_color;
        ctx.fillRect(data.cta.position.x - 10, data.cta.position.y - 50, 250, 80);
        ctx.fillStyle = data.cta.text_color;
        ctx.fillText(cta, data.cta.position.x, data.cta.position.y);
        ctx.stroke();

        // for image

        const loadImage = (src, x, y, width, height) => {
            if (typeof window !== 'undefined') {
                const img = new window.Image();
                img.onload = () => {
                    ctx.drawImage(img, x, y, width, height);
                };
                img.src = src;
            }
        };

        loadImage(selectedImage, data.image_mask.x - 52, data.image_mask.y + 22, data.image_mask.width + 100, data.image_mask.height + 16);

        loadImage(data.urls.design_pattern, data.image_mask.x - 60, data.image_mask.y + 50, data.image_mask.width + 120, data.image_mask.height);

        loadImage(data.urls.stroke, data.image_mask.x - 60, data.image_mask.y, data.image_mask.width + 117, data.image_mask.height + 50);

    }, [selectedImage, content, cta]);

    return (
        <Box width={"40%"} p={"10% 2% 10% 7%"} bg={"#f2f2f2"}>
            <canvas id="myCanvas" width="1080" height="1080" style={{ height: 400, width: 400, backgroundColor: selectedColor }} />

        </Box>
    );
};




