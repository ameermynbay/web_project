from django.db import models

class Course(models.Model):
    name=models.CharField(max_length=400, default='Golang')
    author=models.CharField(max_length=400, default='MIT')
    image_ref=models.CharField(max_length=400,default='../images/default.jpg')
    description=models.CharField(max_length=1500,default='Golang language course from MIT university')
    price = models.FloatField(default=1000)
    user = models.IntegerField(default=1)
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'author':self.author,
            'image_ref':self.image_ref,
            'description':self.description,
            'price':self.price,
            'user':self.user
        }


class University(models.Model):
    name = models.CharField(max_length=200)
    image_ref = models.CharField(max_length=400, default='../images/default.jpg')
    description=models.CharField(max_length=400,default='Some course')
    year=models.CharField(max_length=200,default=2001)
    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'image_ref': self.image_ref,
            'description':self.description,
            'year':self.year
        }



class Teacher(models.Model):
    name=models.CharField(max_length=200)
    image_ref=models.CharField(max_length=400,default='../images/default.jpg')
    university = models.ForeignKey(University, models.CASCADE,default=1)
    degree = models.CharField(max_length=400,default='Magister')
    course = models.ForeignKey(Course, models.CASCADE,default=1)

    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'image_ref':self.image_ref,
            'university':self.university,
            'degree':self.degree
        }

class PosNegManager(models.Manager):
    def get_query_negative(self):
        return super(PosNegManager, self).all().filter(liked=False)
    def get_query_positive(self):
        return super(PosNegManager, self).all().filter(liked=True)

class Review(models.Model):
    author=models.CharField(max_length=400,default='John')
    description=models.CharField(max_length=400,default='Some course')
    liked=models.BooleanField(default=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, default=1)
    objects = models.Manager()
    posneg_reviews = PosNegManager()
    def to_json(self):
        return {
            'id':self.id,
            'author':self.author,
            'description':self.description,
            'liked':self.liked,
        }

