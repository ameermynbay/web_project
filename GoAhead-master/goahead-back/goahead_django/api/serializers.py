from rest_framework import serializers
from .models import Teacher, Course, Review, University
class CourseSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    image_ref = serializers.CharField()
    price = serializers.FloatField()
    author = serializers.CharField()
    user = serializers.IntegerField()

    def create(self, validated_data):
        course = Course.objects.create(name=validated_data.get('name'), description=validated_data.get('description'),
                                       image_ref=validated_data.get('image_ref'), price=validated_data.get('price'),
                                       author=validated_data.get('author'), user=validated_data.get('user'))
        return course

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image_ref = validated_data.get('image_ref', instance.image_ref)
        instance.price = validated_data.get('price', instance.price)
        instance.author = validated_data.get('author', instance.author)
        instance.user = validated_data.get('user',instance.user)
        instance.save()
        return instance


class UniversitySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    image_ref = serializers.CharField()
    year = serializers.FloatField()

    def create(self, validated_data):
        university = University.objects.create(name=validated_data.get('name'), description=validated_data.get('description'),
                                       image_ref=validated_data.get('image_ref'), year=validated_data.get('year'))
        return university

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.image_ref = validated_data.get('image_ref', instance.image_ref)
        instance.year = validated_data.get('year', instance.year)
        instance.save()
        return instance

class TeacherSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)
    course_id = serializers.IntegerField(write_only=True)
    university = UniversitySerializer(read_only=True)
    university_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Teacher
        fields = ('id', 'name', 'image_ref', 'university', 'university_id', 'degree', 'course', 'course_id')


class ReviewSerializer(serializers.ModelSerializer):
    teacher = TeacherSerializer(read_only=True)
    teacher_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Review
        fields = ('id', 'author', 'description', 'liked', 'teacher', 'teacher_id')

