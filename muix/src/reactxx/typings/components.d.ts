declare namespace ReactXX {

  const enum CompNames {
    Text = 'ReactXX$Text',
    View = 'ReactXX$View',
    Icon = 'ReactXX$Icon',
    ScrollView = 'ReactXX$ScrollView',
    AnimatedView = 'ReactXX$AnimatedView',
  }

  type TextShape = OverwriteShape<{
    common: ShapeTexts<'root' | 'singleLineStyle'>
    style: ReactN.TextStyle,
    web: 'pressable'
    props: { numberOfLines?: number } & OnPressX
    propsWeb: React.HTMLAttributes<HTMLSpanElement>
    propsNative: ReactN.TextProperties
  }>
  type ViewShape = OverwriteShape<{
    common: ShapeViews<'root'>
    style: ReactN.ViewStyle,
    props: OnPressAllX
    propsWeb: React.HTMLAttributes<HTMLDivElement>
    propsNative: ReactN.ViewProperties
  }>
  type AnimatedViewShape = ViewShape
  type IconShape = OverwriteShape<{
    common: ShapeTexts<'root'>
    style: ReactN.TextStyle,
    props: { data: string } & OnPressX
    propsWeb: React.SVGAttributes<SVGElement>
    //from node_modules\@types\expo\index.d.ts, BaseIconProps
    propsNative: {
      size?: number
      color?: string
    }
  }>
  type ScrollViewShape = OverwriteShape<{
    common: ShapeScrollViews<'root' | 'container'>
    web: 'rootHorizontal' | 'containerHorizontal'
    style: ReactN.ScrollViewStyle
    props: {
      horizontal?: boolean
    }
    propsWeb: React.HTMLAttributes<HTMLDivElement>
    propsNative: ReactN.ScrollViewProperties
  }>

  interface SheetsX {
    [CompNames.Text]?: PartialSheetX<TextShape>
    [CompNames.View]?: PartialSheetX<ViewShape>
    [CompNames.AnimatedView]?: PartialSheetX<AnimatedViewShape>
    [CompNames.Icon]?: PartialSheetX<IconShape>
    [CompNames.ScrollView]?: PartialSheetX<ScrollViewShape>
  }
}
