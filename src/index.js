/**
 * React Native Translate forked from https://github.com/maximromanyuk/react-native-translate
 * Now supporting translate for nested objects
 */

import React from 'react';
import { Text } from 'react-native';

export let _localization = {};

export function setLocalization(localization) {
  _localization = localization;
}

export function translate(value) {
  const splitText = value.split('.');
  return splitText.length > 1
    ? _localization[splitText[0]][splitText[1]]
    : _localization[value];
}

export const Translate = ({ value }) => <Text>{translate(value)}</Text>;
