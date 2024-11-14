from django.urls import path
from .views import ContactView, ContactDetailView

urlpatterns = [
    path('', ContactView.as_view()),
    path('<int:pk>', ContactDetailView.as_view(), name='contact_detail')

]
