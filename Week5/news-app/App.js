import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Linking, ScrollView } from 'react-native';
import { Input, Icon } from 'react-native-elements';

import Header from './components/Header'
import Find from './components/Header'
import { filterForUniqueArticles, openLink, renderArticleItem } from './utils'
import Article from './components/Article';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [tempArticles, setTempArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasErrored, setHasApiError] = useState(false);
  const [lastPageReached, setLastPageReached] = useState(false);
  const [textToSearch, setTextToSearch] = useState('');

  const getNews = async () => {
    if (textToSearch) return;
    if (lastPageReached) return;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=86f116199fac4a458457b8898ea85b8f&page=${pageNumber}`
        // 'https://tuoihocsinh.com/data3.json'
      );
      const jsonData = await response.json();
      const hasMoreArticles = jsonData.articles.length > 0;

      if (hasMoreArticles) {
        const newArticleList = filterForUniqueArticles(
          articles.concat(jsonData.articles)
        );
        setArticles(newArticleList);
        setTempArticles(newArticleList);
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

  const searchKeyword = async () => {
    
    if (textToSearch === '') {
      setArticles(tempArticles);
    }
    if (textToSearch !== '') {
      // setTempArticles(articles);
      setArticles(tempArticles.filter((article) => {
        return article.title.toLowerCase().includes(textToSearch.toLowerCase());
      }));
    }
  }

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

        <Input
          placeholder={'Articles count: ' + articles.length}
          leftIcon={<Icon
            name='search'
            size={24}
            color='black'
          />}
          onChangeText={(text) => {setTextToSearch(text)}}
          textAlign={'center'}
          value={textToSearch !== '' ? textToSearch : ''}
          onSubmitEditing={searchKeyword}
        />
        <FlatList
          data={articles}
          renderItem={renderArticleItem}
          keyExtractor={item => item.title}
          onEndReached={getNews}
          onEndReachedThreshold={1}
          ListFooterComponent={
            lastPageReached ?
              <Text style={{ textAlign: 'center' }}>No more articles</Text> : <ActivityIndicator size="large" loading={loading} />}
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
  },
  header: {
    flex: 0.3,
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
