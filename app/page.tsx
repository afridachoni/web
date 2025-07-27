"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Tv } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    email: "",
    stbSn: "",
    phoneNumber: "",
  })
  const [isRegistered, setIsRegistered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsRegistered(true)
  }

  if (isRegistered) {
    return <SuccessPage formData={formData} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-gray-900">Registration</CardTitle>
          <CardDescription className="text-gray-600">
            Please complete the following information to register your device
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Gmail Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stbSn" className="text-sm font-medium text-gray-700">
                STB Serial Number
              </Label>
              <div className="relative">
                <Tv className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="stbSn"
                  name="stbSn"
                  type="text"
                  placeholder="STB123456789"
                  value={formData.stbSn}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+6212345678911"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Registering...
                </div>
              ) : (
                "Register Now"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function SuccessPage({ formData }: { formData: any }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 flex flex-col border-0">
      {/* Success Section */}
      <div className="flex items-center justify-center pt-8 pb-8 relative overflow-hidden">
        <div className="text-center relative">
          {/* Main success icon */}
          <div className="relative mb-6">
            <img
              src="/images/success-checkmark.png"
              alt="Success Checkmark"
              className="h-28 w-44 mx-auto" // Maintain similar sizing and centering
            />
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-green-700 mb-3 tracking-tight">Registration Successful! 🎉</h1>
            <p className="text-lg text-green-600 font-medium">Welcome, Afrida</p>
          </div>
        </div>
      </div>

      {/* Tabbed Access Guide */}
      <div className="max-w-6xl mx-auto mt-4 flex-grow">
        <Card className="shadow-2xl border-0 rounded-lg">
          <CardHeader className="text-center bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 rounded-t-lg rounded-b-none leading-[1.70rem]">
            <CardTitle className="text-3xl font-bold mb-2">How to Access Your Streaming Services</CardTitle>
            <CardDescription className="text-gray-200 text-lg">
              Follow these simple steps to enjoy your premium content
            </CardDescription>
          </CardHeader>

          <Tabs defaultValue="onestream" className="w-full">
            {/* Simple line tabs */}
            <TabsList className="w-full h-auto p-0 bg-transparent border-b border-gray-200">
              <TabsTrigger
                value="onestream"
                className="flex-1 text-lg py-4 px-6 font-semibold bg-transparent border-b-2 border-transparent rounded-none data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:bg-transparent hover:text-red-400 transition-colors"
              >
                OneStream
              </TabsTrigger>
              <TabsTrigger
                value="hbo"
                className="flex-1 text-lg py-4 px-6 font-semibold bg-transparent border-b-2 border-transparent rounded-none data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent hover:text-blue-500 transition-colors"
              >
                HBO Max
              </TabsTrigger>
            </TabsList>

            {/* OneStream Tab */}
            <TabsContent value="onestream" className="p-8 m-0 bg-white">
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <h2 className="text-3xl font-bold" style={{ color: "#DD1800" }}>
                    OneStream Access Guide
                  </h2>
                </div>
                <p className="text-gray-600 text-lg">Your gateway to unlimited entertainment</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* OneStream Step 1 */}
                <div
                  className="bg-red-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderColor: "#DD1800" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                      style={{ backgroundColor: "#DD1800" }}
                    >
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Initial Login Screen</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="/images/onestream-step1-splash-screen.png"
                          alt="Initial Login Screen"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        On the STB display, you will see the initial login screen. Click <strong>'Continue'</strong> to
                        proceed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OneStream Step 2 */}
                <div
                  className="bg-red-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderColor: "#DD1800" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                      style={{ backgroundColor: "#DD1800" }}
                    >
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Login with Mobile App Options</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="/images/onestream-step2-scan-input.png"
                          alt="Login with Mobile App Options"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        On your mobile app, you will find options to log in by scanning a QR code or manually inputting
                        a code.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OneStream Step 3 */}
                <div
                  className="bg-red-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderColor: "#DD1800" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                      style={{ backgroundColor: "#DD1800" }}
                    >
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Successfully Paired Confirmation</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="/images/onestream-step3-login-confirmation.png"
                          alt="Successfully Paired Confirmation"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        A confirmation pop-up will appear on your mobile device, indicating that the pairing process was
                        successful.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OneStream Step 4 */}
                <div
                  className="bg-red-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderColor: "#DD1800" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                      style={{ backgroundColor: "#DD1800" }}
                    >
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Connect to STB Successfully</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="/images/onestream-step4-stb-update-implied.png"
                          alt="Connect to STB Successfully"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        After successful pairing, you will see a confirmation message indicating that your device is
                        connected to the STB.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OneStream Step 5 */}
                <div
                  className="bg-red-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderColor: "#DD1800" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                      style={{ backgroundColor: "#DD1800" }}
                    >
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">OneStream Home Screen</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="/images/onestream-step5-home-screen.jpeg"
                          alt="OneStream Home Screen"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        This is the main home screen of OneStream, where you can browse various content categories like
                        movies, kids, music, and e-sport.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OneStream Step 6 */}
                <div
                  className="bg-red-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderColor: "#DD1800" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                      style={{ backgroundColor: "#DD1800" }}
                    >
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Scan QR Code</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="/images/onestream-scan-qr-code.png"
                          alt="Scan QR Code"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        Use your mobile device's camera to scan the QR code displayed on the STB screen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OneStream Step 7 */}
                <div
                  className="bg-red-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ borderColor: "#DD1800" }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                      style={{ backgroundColor: "#DD1800" }}
                    >
                      7
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Enter TV Code</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="/images/onestream-enter-tv-code.png"
                          alt="Enter TV Code"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        Alternatively, you can manually enter the 6-digit TV code displayed on your TV screen into the
                        mobile app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* HBO Max Tab */}
            <TabsContent value="hbo" className="p-8 m-0 bg-white">
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <h2 className="text-3xl font-bold" style={{ color: "#0029E2" }}>
                    HBO Max Access Guide
                  </h2>
                </div>
                <p className="text-gray-600 text-lg">Premium entertainment at your fingertips</p>
              </div>

              {/* HBO Sub-tabs */}
              <Tabs defaultValue="connect-stb" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger
                    value="connect-stb"
                    className="text-base font-medium py-3 px-6 bg-white border border-gray-200 rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 data-[state=active]:border-blue-200"
                  >
                    Connect via STB
                  </TabsTrigger>
                  <TabsTrigger
                    value="setup-account"
                    className="text-base font-medium py-3 px-6 bg-white border border-gray-200 rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 data-[state=active]:border-blue-200"
                  >
                    Set up your HBO Max account
                  </TabsTrigger>
                </TabsList>

                {/* Connect via STB Tab */}
                <TabsContent value="connect-stb" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* HBO Step 1 */}
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                          style={{ backgroundColor: "#0029E2" }}
                        >
                          1
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">Access STB Menu</h3>
                          <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                            <img
                              src="/images/hbo-max-login-screen-v2.jpeg"
                              alt="HBO Max Login Screen"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <p className="text-gray-600">
                            On the STB display, select the <strong>'Sign In'</strong> menu to begin the login process.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* HBO Step 2 */}
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                          style={{ backgroundColor: "#0029E2" }}
                        >
                          2
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">Scan QR Code</h3>
                          <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                            <img
                              src="/images/hbo-max-qr-code-screen.jpeg"
                              alt="HBO Max QR Code Screen"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <p className="text-gray-600">
                            A QR Code will appear on the STB screen. Open the camera on your smartphone and scan the
                            displayed QR Code.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* HBO Step 3 */}
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                          style={{ backgroundColor: "#0029E2" }}
                        >
                          3
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">Enter Email</h3>
                          <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                            <img
                              src="/images/hbo-max-email-input.jpeg"
                              alt="HBO Max Email Input Screen"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <p className="text-gray-600">After successfully scanning, enter your email address.</p>
                        </div>
                      </div>
                    </div>

                    {/* HBO Step 4 */}
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                          style={{ backgroundColor: "#0029E2" }}
                        >
                          4
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">Enter Password</h3>
                          <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                            <img
                              src="/images/hbo-max-password-input.jpeg"
                              alt="HBO Max Password Input Screen"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <p className="text-gray-600">Input your password to complete the credentials.</p>
                        </div>
                      </div>
                    </div>

                    {/* HBO Step 5 */}
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                          style={{ backgroundColor: "#0029E2" }}
                        >
                          5
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">Login Confirmation</h3>
                          <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                            <img
                              src="/images/hbo-max-all-done.jpeg"
                              alt="HBO Max Login Successful Notification"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <p className="text-gray-600">
                            Wait until the <strong>'Login Successful'</strong> notification appears.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* HBO Step 6 */}
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                          style={{ backgroundColor: "#0029E2" }}
                        >
                          6
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">STB Display Changes & Access Profile</h3>
                          <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                            <img
                              src="/images/hbo-max-profile-selection.jpeg"
                              alt="HBO Max Profile Selection Menu"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <p className="text-gray-600">
                            The STB display will automatically change, indicating that login has been completed
                            successfully. Select the <strong>'My Profile'</strong> menu to access your account settings
                            and information.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* HBO Step 7 */}
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg"
                          style={{ backgroundColor: "#0029E2" }}
                        >
                          7
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-3 text-lg">Enter Home</h3>
                          <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                            <img
                              src="/images/hbo-max-home-screen.jpeg"
                              alt="HBO Max Home Screen"
                              className="w-full h-full object-contain rounded-lg shadow-md"
                            />
                          </div>
                          <p className="text-gray-600">
                            You will be directed to the Home display and are ready to use the STB services.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Set up HBO Max account Tab */}
                <TabsContent value="setup-account" className="mt-0">
                  <div className="flex justify-center">
                    <div
                      className="bg-blue-50 p-6 rounded-xl border-l-4 hover:shadow-lg transition-all duration-300 max-w-4xl w-full"
                      style={{ borderColor: "#0029E2" }}
                    >
                      <h3 className="font-bold text-gray-800 mb-4 text-xl text-center">Set up your HBO Max account</h3>
                      <div className="w-full flex flex-col items-center justify-center bg-white rounded-lg p-4">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2017791-Z4d1TCAWnjUvUVTTy8UZ5Z2ZLFhrmx.png"
                          alt="HBO Max Account Activation Guide - 5 Step Process"
                          className="w-full h-auto object-contain rounded-lg"
                        />
                        <div className="mt-6 mb-4 flex justify-center">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 text-lg font-medium">
                            Activate Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
