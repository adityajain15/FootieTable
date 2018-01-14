<template>
  <div id="app">
    <SeasonTable max="22"/>
    <SeasonTable season="2016"/>
    <SeasonTable season="2015"/>
    <SeasonTable season="2014"/>
    <SeasonTable season="2013" max="40"/>
    <SeasonTable season="2012" max="39"/>

    <SeasonTable season="2011" max="37"/>

    <SeasonTable season="2010" max="37"/>
    <SeasonTable season="2009"/>
    <SeasonTable season="2008" max="39"/>
    <SeasonTable season="2007" max="39"/>
    <SeasonTable season="2006" max="39"/>
    <SeasonTable season="2005"/>
    <SeasonTable season="2004" max="39"/>
    <SeasonTable season="2003" max="36"/>
    <SeasonTable season="2002"/>
    <SeasonTable season="2001"/>
    <SeasonTable season="2000"/>
    <SeasonTable season="1999" max="37"/>
    <SeasonTable season="1998" max="40"/>
    <SeasonTable season="1997"/>
    <SeasonTable season="1996" max="41"/>
    <SeasonTable season="1995"/>
    <SeasonTable season="1994" max="37"/>
    <SeasonTable season="1993" max="40"/>
    <SeasonTable season="1992" max="38"/>
  </div>
</template>

<script>
import SeasonTable from './components/SeasonTable'
export default {
  name: 'app',
  components: {
    SeasonTable
  }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  height: 300px; 
}
</style>
