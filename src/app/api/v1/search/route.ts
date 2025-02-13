import { NextResponse } from "next/server"

export const GET = () => {

    const data: any[] = [
        "Jokowi makan di warung",
        "Presiden Indonesia",
        "Momen ",
        "Makan gratis",
        "Video terbaru viral,",
        "Presiden",
        "Makan",
        "Viral!",
        "Makanan",
        "Terbaru! ",
        "Viral,",
        "Makan siang h",
        "Jokowi dan",
        "Menu makan ",
        "Warga heboh! ",
        "Makan bareng ",
        "Terbaru! Presiden",
        "Makanan viral ",
        "Presiden makan",
        "Warung makan",
      ];

    return NextResponse.json({
        status: true,
        data
    });
}