from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    use_in_migrations: True

    def create_user(self, user_id, password, email, nickname, profile_img, **kwargs):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            user_id = user_id,
            email = email,
            nickname = nickname,
            profile_img = profile_img,
        )
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user

    # def create_superuser(self, email, user_id, password, **extra_fields):
    #     user = self.create_user(
    #         user_id = user_id,
    #         email = email,
    #         nickname = user_id,
    #         password = password,
    #         introduce = None,
    #         profile_photo = None,
    #     )

    #     user.is_staff = True
    #     user.is_superuser = True
    #     user.is_active = True
    #     user.save(using=self._db)
    #     return user


class User(AbstractBaseUser, PermissionsMixin):
    profile_img = models.ImageField(upload_to="media/profile", blank=True, null=True)
    user_id = models.CharField(unique=True, blank=False, null=False, max_length=50)
    email = models.CharField(unique=True, blank=False, null=False, max_length=255)
    nickname = models.CharField(blank=False, null=False, max_length=30)

    last_login = models.DateField(auto_now=True, null=True) 
    is_superuser = models.BooleanField(default=False) 
    is_active = models.BooleanField(default=True) 
    is_staff = models.BooleanField(default=False) 

    # helper class
    objects = UserManager() 
    USERNAME_FIELD = 'user_id' 
    REQUIRED_FIELDS = ['email'] # superuser ?

    def __str__(self):
        return self.user_id

    