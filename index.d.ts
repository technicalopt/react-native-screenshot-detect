declare module "react-native-screenshot-detect" {
    import { NativeEventEmitter } from 'react-native';
    export default class ScreenshotDetect {
        static addEventListener(cb: Function): NativeEventEmitter;
        static stopListener(): void;
        static startListener(): void;
        static clearListener(): void;
    }
}
