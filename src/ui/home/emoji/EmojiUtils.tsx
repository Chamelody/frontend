import React from "react";
import { Emoji } from "./EmojiTypes";
import EmojiData from "../emoji/EmoInfo.json";

interface EmojiCategory {
    category: string;
    subcategories: Emoji[];
}

interface EmojiData {
    emojiCategories: EmojiCategory[];
}

export function selectRandomEmojis(data: EmojiData, count: number): Emoji[] {
    const randomEmojis: Emoji[] = [];
    const categories = data.emojiCategories;

    categories.forEach((category) => {
        const emojis = category.subcategories;
        const selectedEmojis: Emoji[] = [];

        if (emojis.length <= count) {
            selectedEmojis.push(...emojis);
        } else {
            const shuffledEmojis = emojis.sort(() => 0.5 - Math.random());
            selectedEmojis.push(...shuffledEmojis.slice(0, count));
        }

        randomEmojis.push(...selectedEmojis);
    });

    return randomEmojis.sort(() => 0.5 - Math.random());
}

export function getGridValue(size: string) {
    switch (size) {
        case "large":
            return { gridColumn: "span 3", gridRow: "span 3" };
        case "mid":
            return { gridColumn: "span 2", gridRow: "span 2" };
        case "small":
            return { gridColumn: "span 1", gridRow: "span 1" };
        case "tag":
            return { gridColumn: "span 2", gridRow: "span 1" };
        default:
            return { gridColumn: "auto", gridRow: "auto" };
    }
}

export function getRandomSizeList(count: number) {
    const sizes = ["small", "mid", "large", "tag"];
    const weights = [4, 2, 1, 2];
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const randomSizes: string[] = [];

    for (let j = 0; j < count; j++) {
        const randomValue = Math.random() * totalWeight;
        let cumulativeWeight = 0;

        for (let i = 0; i < sizes.length; i++) {
            cumulativeWeight += weights[i];
            if (randomValue < cumulativeWeight) {
                randomSizes.push(sizes[i]);
                break;
            }
        }
    }

    return randomSizes;
}
