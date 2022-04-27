import DirectoryItem from '../directory-item/directory-item.component'

import { DirectoryContainer } from './directory.styles';

const Directory = ({categories}) => {
  return (
        <DirectoryContainer>
      {
        categories.map(({title, id, imageUrl}) => (
            <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
        ))}
    </DirectoryContainer>
  );
}

export default Directory;