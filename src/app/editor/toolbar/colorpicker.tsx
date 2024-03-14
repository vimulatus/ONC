import {HexColorPicker} from 'react-colorful'

export default function ColorPicker(
    { 
        color, 
        setColor 
    }: {
        color: string, 
        setColor: (color: string | ((prevColor: string) => string)) => void
    }) {

        return (
            <div>
                <div>
                    <HexColorPicker color={color} onChange={setColor} />
                    {/* Input hex value */}
                </div>
                <div>
                    {/* Preset Color Values */}
                </div>
            </div>
        )
}