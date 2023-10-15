import React from 'react';
import {Container} from '@mui/material';

const styles = {
    container: {
        marginTop: 15

    }
}

const PageContainer = (props)=>{
    return(
        <Container sx={styles.container}>
            {props.children}
        </Container>
    )
}

export default PageContainer;