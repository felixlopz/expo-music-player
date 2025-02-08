import library from '#/assets/data/library.json'
import { FlatList, FlatListProps, View } from 'react-native'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '#/styles'
import { Track } from 'react-native-track-player'

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}

const ItemDivider = () => (
  <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

const TrackList = ({ tracks, ...tracklistProps }: TrackListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      renderItem={({ item: track }) => <TrackListItem track={track} />}
      ItemSeparatorComponent={ItemDivider}
      ListFooterComponent={ItemDivider}
      {...tracklistProps}
    />
  )
}

export default TrackList
