import { unknowTrackImageUri } from '#/constants/images'
import { colors, fonSize } from '#/constants/tokens'
import { defaultStyles } from '#/styles'
import { TouchableHighlight, View, StyleSheet, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Track } from 'react-native-track-player'

export type TrackListItemProps = {
  track: Track
}

export const TrackListItem = ({ track }: TrackListItemProps) => {
  const isActiveTrack = false

  return (
    <TouchableHighlight>
      <View style={styles.trackItemContainer}>
        <View>
          <FastImage
            source={{
              uri: track.artwork ?? unknowTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{ ...styles.trackArtworkImage, opacity: isActiveTrack ? 0.6 : 1 }}
          />
        </View>

        {/*  */}
        <View style={{ width: '100%' }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}
          >
            {track.title}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} style={styles.trackArtistText}>
              {track.artist}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: 'row',
    columnGap: 14,
    alignItems: 'center',
    paddingRight: 20,
  },

  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fonSize.sm,
    fontWeight: '600',
    maxWidth: '90%',
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
})
