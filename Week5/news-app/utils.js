import React from 'react';
import { Linking } from 'react-native';

import Article from './components/Article'

const filterForUniqueArticles = arr => {
    const cleaned = [];
    arr.forEach(itm => {
      let unique = true;
      cleaned.forEach(itm2 => {
        const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
        if (isEqual) unique = false;
      });
      if (unique) cleaned.push(itm);
    });
    return cleaned;
  };
  
  const openLink = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    });
  };
  
  const renderArticleItem = ({ item }) => {
    return (<Article data={item} onPressArticle={openLink}/>);
  };

  export {filterForUniqueArticles, openLink, renderArticleItem}