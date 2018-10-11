import { ts } from 'reactxx-core/tests/flow/shape'

export const sheet = ts.sheetCreator = theme => ts.sheet = {
    root: ts.view = {
        margin: 4,
        //color: 'red',
        $web: ts.web = {
            cursor: 'pointer',
            //x: 1,
            ':hover': {
                ':active': {
                    $sheetSwitch: ts.sheetSwitch$Web = {
                        isDrawerClosed: [{
                            color: 'red',
                            //x: 1,
                        }],
                    },

                }
            },
            // ':active': [{
            // }],
            $sheetSwitch: ts.sheetSwitch$Web = {
                isDrawerClosed: [{
                    color: 'red',
                    cursor: 'pointer',
                    //x: 1,
                }],
                tabletWidth: {
                    color: 'red',
                    cursor: 'pointer',
                    //x: 1,
                }
            },
            $transitionGroup: ts.transitionGroup$Web = {
                leftDrawer: {
                    opacity: [1, 0],
                    color: ['', ''],
                    //x: 1,
                },
            }
        },
        $transitionGroup: ts.transitionGroupView = {
            leftDrawer: {
                //$name: 'xmobile',
                opacity: [1, 0],
                //color: ['', ''],
            }
        },
        $native: ts.nativeView = [
            {
                margin: 4,
                //color: 'red',
            },
            {
                padding: 4,
                //cursor: 'pointer',
            },
        ],
        $sheetSwitch: ts.sheetSwitchView = {
            mobileWidth: {},
            isDrawerOpened: {
                //color: 'red',
            },
            //isMobileWidthx: {},
        },
    },
    label: ts.text = [{
        margin: 0,
        color: theme.primary.color,
        //backgroundColor: theme.primary.backgroundx,
        //x: 1,
        $web: ts.web = [{
            color: 'gray',
            //x: 1,
            $sheetSwitch: ts.sheetSwitchText = {
                isDrawerClosed: [{
                    color: 'red',
                    //x: 1,
                }],
            },
        }],
        $transitionGroup: ts.transitionGroupText = {
            leftDrawer: {
                //$name: 'xmobile',
                opacity: [1, 0],
                color: ['', ''],
                //x1: ['', ''],
            }
        },
    }],
    webOnly: {
        //margin: 4,
        $web: ts.web = {
            color: 'red',
            //x: 1,
            $sheetSwitch: ts.sheetSwitchText = {
                isDrawerClosed: [{
                    color: 'red',
                    //x: 1,
                    $transitionGroup: ts.transitionGroup$Web = {
                        leftDrawer: {
                            //$name: 'xmobile'
                            color: ['', ''],
                            //x: [0, 0]
                        },
                    }
                }],
            },
            $transitionGroup: ts.transitionGroup$Web = {
                leftDrawer: {
                    color: ['', ''],
                    //x: [0, 0]
                }
            },
        },
    },
    nativeOnly: {
        //margin: 4,
        $native: ts.nativeView = {
            margin: 20,
            //color: 'red',
            $sheetSwitch: ts.sheetSwitchView = {
                isDrawerClosed: [{
                    margin: 4,
                    //color: 'red',
                }],
            },
            $transitionGroup: ts.transitionGroupView = {
                leftDrawer: {
                    opacity: [0, 1],
                    left: [0, 200],
                    //color: ['', ''],
                }
            },
        },
    }

}