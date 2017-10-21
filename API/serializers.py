from rest_framework import serializers
from app.models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('pk', 'name', 'company', 'batch', 'trader', 'date', 'price', 'discount')
        
    def create(self, validated_data):
        product = Product(
            name=validated_data['name'],
            company=validated_data['company'],
            batch=validated_data['batch'],
            trader=validated_data['trader'],
            date=validated_data['date'],
            discount=validated_data['discount'],
            price=validated_data['price'],
        )
        product.save()
        return product
