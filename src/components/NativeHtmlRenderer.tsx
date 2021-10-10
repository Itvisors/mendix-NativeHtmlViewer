import { createElement, ReactElement } from "react";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

export interface NativeHtmlRendererProps {
    content?: string;
}

export const NativeHtmlRenderer = (props: NativeHtmlRendererProps): ReactElement => {
    const { width } = useWindowDimensions();
    const source = {
        html: props.content ? props.content : ""
    };
    return <RenderHtml contentWidth={width} source={source} />;
};
