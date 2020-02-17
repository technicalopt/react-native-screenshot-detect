declare module "react-native-screenshot-detect" {
    import { NativeEventEmitter } from 'react-native';

    export function addEventListener(cb: Function): NativeEventEmitter;
    export function startListener(): void;
    export function stopListener(): void;
    export function clearListener(): void;
}
