// Cells without width information never get narrower than this, so they stay readable on small screens.
const MIN_AUTO_CELL_WIDTH = 60;

// Editors like TipTap put the column width on each cell, comma separated when the cell spans multiple columns.
const getColumnWidth = tnode => {
    const colwidth = tnode.attributes?.colwidth;
    if (!colwidth) {
        return undefined;
    }
    const width = colwidth.split(",").reduce((total, value) => total + (parseFloat(value) || 0), 0);
    return width > 0 ? width : undefined;
};

// Fit to width: cells keep their width when it fits and shrink proportionally when it does not, so text wraps.
// Cells without a width share the remaining space.
const getCellStyle = tnode => {
    const width = getColumnWidth(tnode);
    if (width) {
        return { flexGrow: 0, flexShrink: 1, flexBasis: width };
    }
    return { flexGrow: 1, flexShrink: 1, flexBasis: 0, minWidth: MIN_AUTO_CELL_WIDTH };
};

const rowStyle = { flexDirection: "row", flexWrap: "nowrap" };

const RowRenderer = ({ TDefaultRenderer, ...props }) => <TDefaultRenderer {...props} style={[props.style, rowStyle]} />;

const CellRenderer = ({ TDefaultRenderer, ...props }) => (
    <TDefaultRenderer {...props} style={[props.style, getCellStyle(props.tnode)]} />
);

export const tableRenderers = {
    tr: RowRenderer,
    td: CellRenderer,
    th: CellRenderer
};
