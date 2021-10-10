import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { NativeHtmlViewerProps } from "../typings/NativeHtmlViewerProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class NativeHtmlViewer extends Component<NativeHtmlViewerProps<CustomStyle>> {
    render(): ReactNode {
        return <HelloWorld name={this.props.yourName} style={this.props.style} />;
    }
}
