from django.urls import path
from .views.fbv import teacher_reviews, teacher_university, course_teachers, negative_reviews, positive_reviews, \
     teacher_detail, university_detail
from .views.cbv import  UniversityListAPIView, CourseListAPIView, TeacherListAPIView, CourseDetail

urlpatterns = [
    path('courses',CourseListAPIView.as_view()),
    path('teachers',TeacherListAPIView.as_view()),
    path('universities',UniversityListAPIView.as_view()),
    path(r'courses/<int:pk>', CourseDetail.as_view()),
    path(r'teachers/<int:id>', teacher_detail),
    path(r'universities/<int:id>', university_detail),
    path(r'courses/<int:id>/teachers', course_teachers),
    path(r'teachers/<int:id>/university', teacher_university),
    path(r'teachers/<int:id>/reviews',teacher_reviews),
    path(r'teachers/<int:id>/reviews/negative',negative_reviews ),
    path(r'teachers/<int:id>/reviews/positive',positive_reviews )
]