import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Linking } from 'react-native';

import Header from './components/Header'
import {filterForUniqueArticles, openLink, renderArticleItem} from './utils'

export default function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasErrored, setHasApiError] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);

  const getNews = async () => {
    if (lastPageReached) return;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=86f116199fac4a458457b8898ea85b8f&page=${pageNumber}`
      );
      const jsonData = await response.json();
      const hasMoreArticles = jsonData.articles.length > 0;

      if (hasMoreArticles) {
        const newArticleList = filterForUniqueArticles(
          articles.concat(jsonData.articles)
        );
        setArticles(newArticleList);
        setPageNumber(pageNumber + 1);
      } 
      else {
        setLastPageReached(true);
      }

      const newArticleList = filterForUniqueArticles(
        articles.concat(jsonData.articles)
      );
      
      setArticles(newArticleList);
      setPageNumber(pageNumber + 1);
    } 
    catch (error) {
      setHasApiError(true);
      
    }

    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);
 
  if (hasErrored) {
    return (
      <View style={styles.container}>
        <Text>Error :(</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" loading={loading} />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Header total={articles.length} />
      
      <FlatList
        data={articles}
        renderItem={renderArticleItem}
        keyExtractor={item => item.title}
        onEndReached={getNews}
        onEndReachedThreshold={1}
        ListFooterComponent={
          lastPageReached ?
            <Text style={{alignItems: 'center'}}>No more articles</Text> : <ActivityIndicator size="large" loading={loading} />}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  }

});
