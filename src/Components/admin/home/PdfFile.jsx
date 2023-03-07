import React from 'react'
import { Document, Text, StyleSheet, Page, View } from "@react-pdf/renderer";
import axios from '../../../axios';
import { useState } from 'react';
import { useEffect } from 'react';

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
    },
    title: {
      fontSize: 24,
      textAlign: "center",
    },
  });

function PdfFile() {

    const [monthsale,setMonthSale]  = useState()
    const [monthOrder,setMonthOrder] = useState()

    const getMonthsales = () => {
        
        axios.get("/admin//getMonthOrder").then((response)=> {
            let data = response.data.sales
            setMonthSale(data)
          })
    }

    const getMonthOrders = () => {
        
        axios.get("/admin//getMonthBooking").then((response)=> {
            let data = response.data.orders
            setMonthOrder(data)
          })
    }


    

    useEffect(() => {
        getMonthsales()
        getMonthOrders()
    },[])

 
  return (
    
          <Document>
  <Page style={styles.body}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.header}>
            Toool report
        </Text>
      {/* <Image source={} style={{ width: 50, height: 50 }} /> */}

      <Text style={styles.title} fixed>
        Monthly Sales Report
      </Text>
      <Text style={{ color: '#999', marginRight: 10 }}>Date: March 7, 2023</Text>
    </View>
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Sales:</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Rs. {monthsale}</Text>
    </View>
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Orders:</Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}> {monthOrder}</Text>
    </View>
    <View style={{ marginTop: 30 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sales Today:</Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16 }}>1.New orders - $15,000</Text>
        <Text style={{ fontSize: 16 }}>2. Payments - $10,000</Text>
        <Text style={{ fontSize: 16 }}>3.Completed Orders - $8,000</Text>
      </View>
    </View>
    
  </Page>
</Document>
    
  )
}

export default PdfFile