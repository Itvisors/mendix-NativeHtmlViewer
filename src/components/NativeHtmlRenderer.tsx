import { createElement, ReactElement } from "react";
import { Text, View } from "react-native";

export interface NativeHtmlRendererProps {
    content?: string;
}

export const NativeHtmlRenderer = (props: NativeHtmlRendererProps): ReactElement => {
    return (
        <View>
            <Text style={{ color: "green" }}>{props.content}</Text>
        </View>
    );
};
