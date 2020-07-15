import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet, TVEventHandler } from 'react-native';

import Video from 'react-native-video';
import windows from './windows';

const WindowPlayer = ({ window, onEnd }) => {
    const [videoURL, setVideoURL] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://player.vimeo.com/video/${window.url}/config`)
            .then(response => response.json())
            .then(body => {
                setVideoURL(body.request.files.hls.cdns[body.request.files.hls.default_cdn].url);
            });
    }, [window]);

    return (
        <>
            {videoURL &&
                <>
                    <Video
                        source={{ uri: videoURL }}
                        style={styles.video}
                        onEnd={onEnd}
                        onLoadStart={() => {
                            setIsLoading(true);
                        }}
                        onReadyForDisplay={() => {
                            setIsLoading(false);
                        }}
                    />
                    <Text style={styles.location}>{window.location}</Text>
                </>
            }
            {(!videoURL || isLoading) &&
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator style={styles.loadingSpinner} />
                    <Text style={styles.loadingText}>Finding a window for you...</Text>
                </View>
            }
        </>
    );
};

const ShufflingWindowPlayer = () => {
    const [window, setWindow] = React.useState(windows[0]);

    const nextWindow = () => {
        const randomIndex = Math.floor(Math.random() * Math.floor(windows.length - 1))
        setWindow(windows[randomIndex]);
    };

    React.useEffect(() => {
        const eventHandler = new TVEventHandler();

        eventHandler.enable(this, (cmp, { eventType }) => {
            switch (eventType) {
                case "select":
                case "up":
                case "down":
                case "left":
                case "right":
                case "swipeUp":
                case "swipeDown":
                case "swipeLeft":
                case "swipeRight":
                    nextWindow();
                    break;

                default:
                    console.log("unknown event", eventType);
            }
        });

        return () => {
            eventHandler.disable();
        };
    }, []);

    return <WindowPlayer window={window} onEnd={nextWindow} />;
};

const App = () => (
    <ShufflingWindowPlayer />
);

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    location: {
        color: 'white',
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 28,
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    loadingSpinner: {
        marginBottom: 40,
    },
    loadingText: {
        color: 'white',
        fontSize: 48,
    },
});

export default App;
