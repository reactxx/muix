import React from 'react';
import { TAnimation, Types, withStylesCreator, TAddIn } from 'reactxx-animation';
import { TCommon } from 'reactxx-basic';
import { AnimatedText, AnimatedView, ScrollView, View } from 'reactxx-primitives';
import { H2 } from '../primitives/typo';



/************************
* TYPINGS
*************************/

export const enum Consts {
  Label = 'ks$ae2$label' //unique component name
}

interface Shape extends Types.ShapeDefault<null, TCommon.TEvents> {
  common: TCommon.ShapeViews<'root'> & TCommon.ShapeTexts<'label'>
  //nameType: Consts.Label
  animation: { //animation sheets
    anim1: TCommon.ShapeViews<'rootAnim'> & TCommon.ShapeTexts<'labelAnim'>
    anim2: TCommon.ShapeViews<'rootAnim'> & TCommon.ShapeTexts<'labelAnim'>
    anim3: TCommon.ShapeViews<'rootAnim'> & TCommon.ShapeTexts<'labelAnim'>
  }
  props: {
    isAnim1: boolean
    isAnim2: boolean
    isAnim3: boolean
  }
}

/************************
* SHEET
*************************/

const sheet: Types.SheetX<Shape> = {
  $animations: {
    // three different animations: anim1, anim2 and anim3. Every animation has two sheets: for root and for label
    anim1: {
      rootAnim: {
        opacity: [1, 0.2]
      },
      labelAnim: {
         transform: {
           translateX: [0, -180]
         },
      },
      $duration: 1000 // in msec
    },
    anim2: {
      rootAnim: {
        opacity: [0.2, 1, '-35'] // means 0%-35% of $duration
      },
      labelAnim: {
        transform: {
          scale: [1, 0] ,
          rotate: ['0deg', '180deg'],
          time: '35-' // means 35%-100% of $duration
        },
      },
      $duration: 2000
    },
    anim3: {
      rootAnim: {
        opacity: [1, 0.2, '20-'] // means 20%-100% of $duration
      },
      labelAnim: {
        transform: {
          translateX: [0, -180],
          time: '10-20' // means 10%-20% of $duration
        },
      },
      $duration: 1000
    },
  },
  root: {
    margin: 10,
    backgroundColor: 'blue',
    width: 180,
    padding: 10,
  },
  label: {
    color: 'white'
  }
}

/************************
* CODE
*************************/
const label: Types.CodeSFC<Shape> = props => {
  const { $system: { classNames, onPress, onPressIn, onPressOut }, $animations: { anim1, anim2, anim3 }, classes, className, style, isAnim1, isAnim2, isAnim3, children, ...rest } = props
  const root = classNames<Types.ViewRulesetX>(classes.root, className, isAnim1 && anim1.rootAnim, isAnim2 && anim2.rootAnim, isAnim3 && anim3.rootAnim)
  const label = classNames<Types.TextRulesetX>(classes.label, isAnim1 && anim1.labelAnim, isAnim2 && anim2.labelAnim, isAnim3 && anim3.labelAnim)
  return <AnimatedView {...rest} className={root}>
    <AnimatedText className={label}>
      {children}
    </AnimatedText>
  </AnimatedView>
}

export const Label = withStylesCreator<Shape>(sheet, label, {name:Consts.Label})()

/************************************************
*************************************************
*
* EXAMPLE
*
*************************************************
*************************************************/
const Section: React.SFC = ({ children }) => <View className={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>{children}</View>

const App_: React.SFC = props => <Label isAnim1 onPress={ev => ev.current.$animations.anim1.toggle()}>TOOGGLE ANIM1</Label>

const App: React.SFC = props => <ScrollView className={{ flex: 1 }}>
  <Section>
    <H2>SIMPLE (ANIM1)</H2>
    <Label isAnim1 onPress={ev => ev.current.$animations.anim1.toggle()}>TOOGGLE ANIM1</Label>
    <Label isAnim1 onPressIn={ev => ev.current.$animations.anim1.open()} onPressOut={ev => ev.current.$animations.anim1.close()}>OPEN x CLOSE</Label>
  </Section>
  <Section>
    <H2>WITH DELAY (ANIM2)</H2>
    <Label isAnim2 onPress={ev => ev.current.$animations.anim2.toggle()}>TOOGGLE ANIM2</Label>
    <Label isAnim2 onPressIn={ev => ev.current.$animations.anim2.open()} onPressOut={ev => ev.current.$animations.anim2.close()}>OPEN x CLOSE</Label>
  </Section>
  <Section>
    <H2>WITH DELAY (ANIM3)</H2>
    <Label isAnim3 onPress={ev => ev.current.$animations.anim3.toggle()}>TOOGGLE ANIM3</Label>
    <Label isAnim3 onPressIn={ev => ev.current.$animations.anim3.open()} onPressOut={ev => ev.current.$animations.anim3.close()}>OPEN x CLOSE</Label>
  </Section>
  <Section>
    <H2>CHANGE DURATION (ANIM1)</H2>
    <Label isAnim1 classes={{ $animations: { anim1: { $duration: 250 } } }} onPress={ev => ev.current.$animations.anim1.toggle()}>TOOGGLE ANIM1</Label>
    <Label isAnim1 classes={{ $animations: { anim1: { $duration: 250 } } }} onPressIn={ev => ev.current.$animations.anim1.open()} onPressOut={ev => ev.current.$animations.anim1.close()}>OPEN x CLOSE</Label>
  </Section>
</ScrollView>

export default App

