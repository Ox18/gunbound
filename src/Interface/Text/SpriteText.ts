import { Alignment, FontTextType } from "../../Entity/Text/TextConfiguration";
import { Color } from "../../utils/Color";
import { Vector2 } from "../../utils/Vector2";

export class SpriteText {

    FontTextType!: FontTextType;
    
    Position!: Vector2;
    
    PositionOffset!: Vector2;
    
    Origin!: Vector2;
    
    Scale!: Vector2;
    
    BaseColor!: Color;
    Color!: Color;

    OutlineBaseColor!: Color;
    OutlineColor!: Color;

    Text!: string;

    Rotation!: number;
    LayerDepth!: number;

    Alignment!: Alignment;

    MeasureSize!: Vector2;

    hasOutline!: boolean;

    constructor(
        fontTextType: FontTextType,
        text: string,
        color: Color,
        alignment: Alignment,
        layerDepth: number,
        position = Vector2.one,
        outlineColor = Color.White,
    ) {
        this.Position = position;

        this.BaseColor = color;
        this.Color = color;
        
        this.Alignment = alignment;
        this.LayerDepth = layerDepth;
        this.FontTextType = fontTextType;

        this.hasOutline = false;

        if (outlineColor) {
            this.OutlineColor = Color.White;
        }

        this.Scale = new Vector2(1, 1);
        this.Rotation = 0;

        this.Text = ""

        this.UpdateText(text);
    }

    private UpdateText(text: string): void {
        this.Text = text;

        const size: Vector2 = new Vector2(0, 0);

        if (this.Alignment === Alignment.Left) {
            this.Origin = Vector2.zero;
        } else if (this.Alignment === Alignment.Center) {
            this.Origin = new Vector2(size.x * 0.5, 0);
        } else {
            this.Origin = new Vector2(size.x, 0);
        }
    }
}