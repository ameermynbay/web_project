from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from django_filters import rest_framework as filters
from rest_framework.filters import OrderingFilter
from ..models import Course, Teacher, University

from ..serializers import CourseSerializer, TeacherSerializer, UniversitySerializer


class UniversityListAPIView(generics.ListCreateAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class CourseListAPIView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = (DjangoFilterBackend,
                       OrderingFilter)
    ordering_fields = ('price','name')
    filterset_fields = ('user',)

class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class TeacherListAPIView(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer





