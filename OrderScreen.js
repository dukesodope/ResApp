import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShoppingCard = () => {
  return (
    <View style={styles.shoppingCard}>
      <Text style={styles.shoppingCartTitle}>Shopping Cart</Text>
      <View style={styles.discountContainer}>
        <Text style={styles.discountLabel}>10% OFF</Text>
      </View>
      <View style={styles.cartItem}>
        <Text style={styles.cartItemLabel}>BURGER</Text>
        <Text style={styles.cartItemPrice}>$28</Text>
      </View>
      <View style={styles.cartItem}>
        <Text style={styles.cartItemLabel}>Rating</Text>
        <Text style={styles.cartItemRating}>4.9 (3k+ Rating)</Text>
      </View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.deliveryAddressLabel}>Delivery Address</Text>
        <Text style={styles.deliveryAddressText}>Dhaka, Bangladesh</Text>
      </View>
      <View style={styles.paymentMethod}>
        <Text style={styles.paymentMethodLabel}>Payment Method</Text>
        <Text style={styles.paymentMethodText}>Change</Text>
      </View>
      <View style={styles.checkoutSummary}>
        <View style={styles.checkoutSummaryRow}>
          <Text style={styles.checkoutSummaryLabel}>Subtotal (2)</Text>
          <Text style={styles.checkoutSummaryValue}>$56</Text>
        </View>
        <View style={styles.checkoutSummaryRow}>
          <Text style={styles.checkoutSummaryLabel}>Delivery Fee</Text>
          <Text style={styles.checkoutSummaryValue}>$6.20</Text>
        </View>
        <View style={styles.checkoutSummaryRow}>
          <Text style={styles.checkoutSummaryLabel}>Payable Total</Text>
          <Text style={styles.checkoutSummaryValue}>$62.2</Text>
        </View>
      </View>
      <View style={styles.confirmButton}>
        <Text style={styles.confirmButtonLabel}>Confirm Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  shoppingCartTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#343a40',
    marginBottom: 20,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d4edda',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  discountLabel: {
    fontSize: 18,
    color: '#155724',
    fontWeight: '600',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    marginBottom: 10,
  },
  cartItemLabel: {
    fontSize: 18,
    color: '#495057',
  },
  cartItemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  cartItemRating: {
    fontSize: 16,
    color: '#6c757d',
  },
  deliveryAddress: {
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  deliveryAddressLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#495057',
    marginBottom: 5,
  },
  deliveryAddressText: {
    fontSize: 16,
    color: '#6c757d',
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  paymentMethodLabel: {
    fontSize: 18,
    color: '#495057',
  },
  paymentMethodText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: '600',
  },
  checkoutSummary: {
    marginBottom: 20,
  },
  checkoutSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  checkoutSummaryLabel: {
    fontSize: 18,
    color: '#495057',
  },
  checkoutSummaryValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonLabel: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});

export default ShoppingCard;
