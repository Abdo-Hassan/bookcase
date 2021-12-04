import React from 'react';
import { FlatList } from 'native-base';
import ActionButton from '../components/ActionButton';
import { secondaryColor } from '../constants/Colors';
import UserReview from './UserReview';

export default function ReviewsList({ allReviews, navigation }) {
  const reviews = [
    {
      id: 1,
      commenter: 'Abdo Hassan',
      date: 'Nov 26,2021',
      comment:
        'انا الكاتب ولكن مستمتع جدا بسماع الكتاب بصوت غندور كأنى باسمعه لاول مرة ❤',
    },
    {
      id: 2,
      commenter: 'Esraa Saber',
      date: 'Nov 26,2021',
      comment:
        'الكتاب رائع انصح اى حد بقرائته والتمتع بالقصص الرائعة شكرا احمد الغندور',
    },
    {
      id: 3,
      commenter: 'Sara Islam',
      date: 'Nov 26,2021',
      comment:
        'من اجمل الكتب التى قرأتها مؤخرا الكتاب رائع وخصوصا صوت احمد الغندور شكرا ',
    },
    {
      id: 4,
      commenter: 'Heba Ahmed',
      date: 'Nov 26,2021',
      comment: 'تفوقت على نفسك هذه المرة يا احمد عاش وربنا يوفقك فى اللى جى ',
    },
    {
      id: 5,
      commenter: 'Mohamed Ali',
      date: 'Nov 26,2021',
      comment:
        'من روائع الدحيح هذا الكتاب الذى يحكى قصة كفاح احمد الغندور من نجاح لنجاح',
    },
  ];

  const renderReviews = ({ item }) => (
    <UserReview
      review={item}
      allReviews={allReviews}
      navigation={navigation}
      addComment={false}
      actionButtons={allReviews ? true : false}
    />
  );
  return (
    <>
      <FlatList
        horizontal={!allReviews}
        Vertical={allReviews}
        showsHorizontalScrollIndicator={false}
        data={reviews}
        renderItem={renderReviews}
        keyExtractor={(item) => item.id}
      />
      {allReviews && (
        <ActionButton title='Write Review' color={secondaryColor} review />
      )}
    </>
  );
}
