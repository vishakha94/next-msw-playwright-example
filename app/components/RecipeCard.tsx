import React from "react";
import { Box, Card, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";

interface RecipeCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export function RecipeCard({
  title,
  imageSrc,
  imageAlt,
  description,
}: RecipeCardProps) {
  return (
    <Card size="2">
      <Inset clip="padding-box" side="top" pb="current">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={240}
          height={180}
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 180,
          }}
        />
      </Inset>
      <Box p="3">
        <Text as="p" size="2" weight="bold" mb="1">
          {title}
        </Text>
        <Text as="p" size="2" color="gray">
          {description}
        </Text>
      </Box>
    </Card>
  );
}
