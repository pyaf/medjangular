from django.db import models
from datetime import date
# Create your models here.

class Product(models.Model):
	name = models.CharField(max_length=300)
	company = models.CharField(max_length=500, blank=True, null=True)
	batch = models.CharField(max_length=300, null=True, blank=True)
	trader = models.CharField(max_length=300)
	price = models.FloatField()
	date = models.DateField(default=date.today)

	def __str__(self):
		return '%s - %s' %(self.name, self.date)
