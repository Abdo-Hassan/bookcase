import { Box, useToast } from 'native-base';

export const addToFavorite = (userAuth, favoriteBook, item) => {
  const toast = useToast();
  if (!favoriteBook) {
    setFavoriteBook(true);
    setIconName('favorite');
  } else {
    setFavoriteBook(false);
    setIconName('favorite-border');
  }
  dispatch(
    addBookToFavorite(
      favoriteBook,
      {
        bookImage:
          item?.volumeInfo?.imageLinks?.smallThumbnail || item?.bookImage,
        bookId: item?.id || item?.bookId,
        bookTitle: item?.volumeInfo?.title || item?.bookTitle,
        bookAuthor:
          item?.volumeInfo?.authors || item?.bookAuthor
            ? item?.volumeInfo?.authors[0]
            : '',
        bookDescription: item?.volumeInfo?.description,
        bookPublishedDate: item?.volumeInfo?.publishedDate,
        bookPublisher: item?.volumeInfo?.publisher,
      },
      userAuth?.userId
    )
  );
  toast.show({
    render: () => {
      return (
        <Box
          bg='emerald.300'
          p={2}
          rounded='sm'
          mb={5}
          w='100%'
          _text={{ color: '#000' }}>
          {favoriteBook
            ? 'Your book has been removed from bookshelf!'
            : 'Your book has been added to bookshelf!'}
        </Box>
      );
    },
  });
};
