import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TweetScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.flexRow}>
                    <Image style={styles.avatar} source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png'
                    }} />
                    <View>
                        <Text style={styles.tweetName}>Mohammad Yasin</Text>
                        <Text style={styles.tweetHandle}>@yasin</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="gray" />
                </TouchableOpacity>
            </View>

            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quasi architecto? Qui non consequuntur, placeat facilis accusamus ea ex architecto eum nesciunt quas? Repellat, nemo ex vitae, explicabo hic unde labore ipsum reiciendis excepturi quos, quam illo illum quaerat voluptates.</Text>
            </View>

            <View style={styles.tweetEngagement}>
                <View style={styles.flexRow}>
                    <Text style={styles.tweetEngagementNumber}>620</Text>
                    <Text style={styles.tweetEngagementLabel}>Retweets</Text>
                </View>

                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>38</Text>
                    <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
                </View>

                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>2,320</Text>
                    <Text style={styles.tweetEngagementLabel}>Likes</Text>
                </View>
            </View>

            <View style={[styles.tweetEngagement, styles.spaceAround]}>
                <TouchableOpacity style={styles.flexRow}>
                    <EvilIcons name="comment" size={32} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.flexRow}>
                    <EvilIcons name="retweet" size={32} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.flexRow}>
                    <EvilIcons name="heart" size={32} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.flexRow}>
                    <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={32} color="gray" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    flexRow: {
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 25
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222',
    },
    tweetHandle: {
        marginTop: 4,
        color: 'gray',
    },
    tweetContentContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetContent: {
        fontSize: 20,
        lineHeight: 30
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetEngagementNumber: {
        fontWeight: 'bold',
    },
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 6
    },
    ml4: {
        marginLeft: 16
    },
    spaceAround: {
        justifyContent: 'space-around'
    }

})