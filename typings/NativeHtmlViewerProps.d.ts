/**
 * This file was generated from NativeHtmlViewer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { EditableValue } from "mendix";

export interface NativeHtmlViewerProps<Style> {
    name: string;
    style: Style[];
    content: EditableValue<string>;
}

export interface NativeHtmlViewerPreviewProps {
    class: string;
    style: string;
    content: string;
}
