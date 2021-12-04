import React, { useState } from 'react';
import {
  Collapse,
  Heading,
  Box,
  HStack,
  VStack,
  Badge,
  Slider,
  IconButton,
  ScrollView,
} from 'native-base';
import ReviewsList from '../../components/ReviewsList';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { secondaryColor } from '../../constants/Colors';

export default function ReviewDetails({ navigation }) {
  const [show, setShow] = useState(true);
  const handleToggle = () => setShow(!show);

  return (
    <ScrollView>
      <Box flex={1} bg='#000'>
        <StatusBar style='auto' />
        <HStack m={4}>
          <Badge
            rounded='md'
            py={2.5}
            px={2}
            mr={3}
            zIndex={1}
            variant='solid'
            alignSelf='flex-end'
            _text={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
            }}
            bgColor={secondaryColor}
            right='0'
          >
            4.69
          </Badge>

          <VStack space={2} flex={1}>
            <Heading fontSize='16' color='#fff'>
              Overall rating
            </Heading>
            <Heading fontSize='14' color='#ccc'>
              Based in 1269 ratings
            </Heading>
          </VStack>

          {show ? (
            <IconButton
              onPress={handleToggle}
              size={7}
              variant='ghost'
              _icon={{
                as: Feather,
                name: 'chevron-down',
                color: 'trueGray.400',
                size: '7',
              }}
              _pressed={{
                backgroundColor: '#222',
                borderRadius: 50,
              }}
            />
          ) : (
            <IconButton
              onPress={handleToggle}
              size={7}
              variant='ghost'
              _icon={{
                as: Feather,
                name: 'chevron-up',
                color: 'trueGray.400',
                size: '7',
              }}
              _pressed={{
                backgroundColor: '#222',
                borderRadius: 50,
              }}
            />
          )}
        </HStack>

        <Box mx={3} my={2}>
          <Collapse isOpen={show}>
            <Box>
              <Collapse isOpen={show}>
                <Heading fontSize='16' color='#fff' mb={4}>
                  Other users describe this books as :
                </Heading>
                <Heading fontSize='14' color='#ccc'>
                  Inspiring
                </Heading>
                <Slider
                  size='lg'
                  colorScheme='orange'
                  defaultValue={70}
                  minValue={0}
                  maxValue={100}
                >
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
                <Heading fontSize='14' color='#ccc'>
                  Motivating
                </Heading>
                <Slider
                  size='lg'
                  colorScheme='orange'
                  defaultValue={70}
                  minValue={0}
                  maxValue={100}
                >
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
                <Heading fontSize='14' color='#ccc'>
                  Heartwarming
                </Heading>
                <Slider
                  size='lg'
                  colorScheme='orange'
                  defaultValue={70}
                  minValue={0}
                  maxValue={100}
                >
                  <Slider.Track>
                    <Slider.FilledTrack />
                  </Slider.Track>
                </Slider>
              </Collapse>
            </Box>
          </Collapse>
        </Box>

        <ReviewsList allReviews={true} navigation={navigation} />
      </Box>
    </ScrollView>
  );
}
