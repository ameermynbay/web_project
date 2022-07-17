from ..serializers import CourseSerializer, TeacherSerializer, ReviewSerializer, UniversitySerializer
from rest_framework.decorators import api_view
from ..models import Teacher, Course, Review, University
from rest_framework import status
from rest_framework.response import Response

@api_view(['GET', 'PUT', 'DELETE'])
def teacher_detail(request, id):
    try:
        teacher = Teacher.objects.get(id=id)
    except Teacher.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = TeacherSerializer(teacher)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TeacherSerializer(instance=teacher, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        teacher.delete()

        return Response({'deleted': True})

@api_view(['GET', 'PUT', 'DELETE'])
def university_detail(request, id):
    try:
        university = University.objects.get(id=id)
    except University.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = UniversitySerializer(university)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UniversitySerializer(instance=university, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        university.delete()

        return Response({'deleted': True})

@api_view(['GET','POST'])
def teacher_reviews(request,id):
    if request.method == 'GET' :
        reviews = Review.objects.filter(teacher=id)
        serializer = ReviewSerializer(reviews, many = True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def positive_reviews(request,id):
    if request.method == 'GET':
        reviews = Review.posneg_reviews.get_query_positive().filter(teacher=id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def negative_reviews(request,id):
    if request.method == 'GET':
        reviews = Review.posneg_reviews.get_query_negative().filter(teacher=id)
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def course_teachers(request,id):
    if request.method == 'GET' :
        teachers = Teacher.objects.filter(course=id)
        serializer = TeacherSerializer(teachers, many = True)
        return Response(serializer.data)


@api_view(['GET'])
def teacher_university(request,id):
    if request.method == 'GET' :
        teacher = Teacher.objects.get(id=id)
        university = University.objects.filter(teacher=teacher)
        serializer = UniversitySerializer(university, many = True)
        return Response(serializer.data)


