import { Box } from '@mui/material';
import video from './images/video.mp4'

export function Video() {
    return (
        <Box sx={{ my: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
            <video src={ video } autoPlay muted loop playsInline></video>
        </Box>
    );
}