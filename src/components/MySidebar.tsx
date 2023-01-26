import { Text, Grid } from "@mantine/core"
import { useAppSelector } from '../app/hooks'
import { selectInfo } from '../features/info/infoSlice'


export default function MySidebar() {
    const info = useAppSelector(selectInfo);
    let html; 
    if(info.info.title == '' && info.info.place == '' && info.info.mag == '') {
        html = <Text size="xl" color={'#c14c99'} style={{ padding: 20, margin: 10, height:100 }}>Click on an icon for more information about that earthquake</Text>
    } else {
        html = <Grid>
        <Grid.Col span={12} style={{ padding: 20, margin: 10, height:100 }}>
                <Text size="xl" color={'#850045'}>Title: </Text>
                <Text size="sm" color={'#c14c99'}>{info.info.title}</Text>
        </Grid.Col>
        <Grid.Col span={12} style={{ padding: 20, margin: 10, height:100 }}>
            <Text size="xl" color={'#850045'}>Place: </Text>
            <Text size="sm" color={'#c14c99'}>{info.info.place}</Text>
        </Grid.Col>
        <Grid.Col span={12} style={{ padding: 20, margin: 10, height:100 }}>
            <Text size="xl" color={'#850045'}>Magnitude: </Text>
            <Text size="sm" color={'#c14c99'}>{info.info.mag}</Text>
        </Grid.Col>
    </Grid> ;
    }


    return (
        <>
            {html}
        </>
    )
}