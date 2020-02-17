declare module "react-native-screenshot-detect" {
    import { NativeEventEmitter } from 'react-native';

    export default {
        addEventListener(cb: Function): NativeEventEmitter,
        startListener(): void,
        stopListener(): void,
        clearListener(): void
    }
}
