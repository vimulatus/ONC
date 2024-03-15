"use client"

import { useState } from "react";
import AddTooltip from "../tooltip";
import { Button } from "./button";
import {Icon} from "./icon";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Slider } from "./slider";

export default function FontSize({ _size } : { _size?: number }) {
    const [size, setSize] = useState(_size ? _size : 16)

    return (
        <Button variant="ghost">
            <Popover>
                <AddTooltip content={`Font Size: ${size}`}>
                    <PopoverTrigger>
                        <Icon name="ALargeSmall" />
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="mb-4 flex items-center justify-center">Font Size: {size}</div>
                        <Slider 
                            defaultValue={[size]}
                            max={72}
                            min={8}
                            step={2}
                            onValueChange={(value: React.SetStateAction<number>[]) => setSize(value[0])}
                            />
                    </PopoverContent>
                </AddTooltip>
            </Popover>
            </Button>
    )
}