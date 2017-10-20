from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def IndexView(request):
	template_name = 'landing.html'
	if request.user.is_authenticated():
		return redirect('/dashboard')
	if request.method=='POST':
		username = request.POST.get('username', None)
		password = request.POST.get('password', None)
		print(username, password)
		user = authenticate(username=username, password=password)
		if user:
			login(request, user)
			return redirect('/dashboard')
		else:
			return HttpResponse('<h1>Invalid Credentials</h1>')
	return render(request, template_name)


@login_required(login_url='/')
def DashboardView(request):
	template_name = 'angular/index.html'
	return render(request, template_name, {})

def LogoutView(request):
	logout(request)
	return redirect('/')
