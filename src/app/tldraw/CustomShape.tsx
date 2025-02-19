import {
  Geometry2d,
  HTMLContainer,
  RecordProps,
  Rectangle2d,
  ShapeUtil,
  T,
  TLBaseShape,
  TLResizeInfo,
  Tldraw,
  resizeBox,
} from "tldraw";
import "tldraw/tldraw.css";
import Table from "../Table";

type ICustomShape = TLBaseShape<
  "my-custom-shape",
  {
    w: number;
    h: number;
  }
>;

export class MyShapeUtil extends ShapeUtil<ICustomShape> {
  // [a]
  static override type = "my-custom-shape" as const;
  static override props: RecordProps<ICustomShape> = {
    w: T.number,
    h: T.number,
  };

  getDefaultProps(): ICustomShape["props"] {
    return {
      w: 200,
      h: 200,
    };
  }

  override canEdit() {
    return false;
  }
  override canResize() {
    return true;
  }
  override isAspectRatioLocked() {
    return false;
  }

  getGeometry(shape: ICustomShape): Geometry2d {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    });
  }

  override onResize(shape: any, info: TLResizeInfo<any>) {
    return resizeBox(shape, info);
  }

  component(shape: ICustomShape) {
    return (
      <HTMLContainer style={{ backgroundColor: "#efefef" }}>
        <Table />
      </HTMLContainer>
    );
  }

  indicator(shape: ICustomShape) {
    return <rect width={shape.props.w} height={shape.props.h} />;
  }
}

const customShape = [MyShapeUtil];

export default function CustomShapeExample() {
  return (
    <div className="tldraw__editor">
      <Tldraw
        shapeUtils={customShape}
        onMount={(editor) => {
          editor.createShape({ type: "my-custom-shape", x: 100, y: 100 });
        }}
      />
    </div>
  );
}
