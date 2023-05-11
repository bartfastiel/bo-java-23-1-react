type Props = {
    name: string
    brand?: string
}
export default function Motherboard(props: Props) {

    return <h2>Ein Motherboard {props.name + "(von " + props.brand + ")"}</h2>
}
