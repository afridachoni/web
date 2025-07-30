"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Tv, Check } from "lucide-react"

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
      {/* Success Section - WITH ONE ANIMATED CHECKMARK */}
      <div className="flex items-center justify-center pt-8 pb-8">
        <div className="text-center">
          {/* Single animated checkmark above text */}
          <div className="flex justify-center mb-4">
            <div
              className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full animate-bounce shadow-lg"
              style={{
                animationDuration: "1.5s",
                animationIterationCount: "infinite",
              }}
            >
              <Check className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Text without checkmarks */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-green-700 tracking-tight mb-3">Registration Successful!</h1>
            <p className="text-lg text-green-600 font-medium">Welcome, Afrida 🎉</p>
          </div>
        </div>
      </div>

      {/* Tabbed Access Guide - NO ANIMATIONS */}
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
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Continue on STB</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-24%2015-41-40-gu8Dt8RhDL64Kp7xds6SrX1J7Lk85u.png"
                          alt="OneStream Initial Splash Screen"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        On the STB display, click <strong>'Continue'</strong> to proceed with the login process.
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
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Display QR Code or Pairing Code</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-07-24%2015-41-50-2k4GjK9GBIAhNrAH3gNKxSGiLR6Zj5.png"
                          alt="OneStream TV Screen with QR Code and Input Code Options"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        A QR Code or pairing code will be displayed on the STB screen for authentication.
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
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Open FMX App</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scan%20qr%20code%20Login-F5ckK5BDs4mlvX6ycjuCHcwjOwQZcE.png"
                          alt="FMX App QR Code Scanner Interface"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        Launch the FMX app on your smartphone to begin the pairing process.
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
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Scan or Input Code</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Code%20Login%201-WHpsNNOaJgB5Wa9hUvaQlXYSJdmCb4.png"
                          alt="FMX App TV Code Input Screen"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        In the FMX app, either scan the QR Code or manually input the pairing code displayed on your
                        STB.
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
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Complete Pairing Process</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2017597-s9M3VrW2yUeCGhc08eaRpjt1aeSN3P.png"
                          alt="FMX App Successfully Paired Confirmation Pop-up"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">Wait for the pairing process to complete in the FMX app.</p>
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
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">Pairing Successful</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Code%20Login-uXTy7rIZMtGCronaHnLNPB88NL2FRx.png"
                          alt="FMX App Connect to STB Successfully Notification"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        A <strong>'Pairing Successful'</strong> notification will appear in the FMX app, confirming the
                        connection.
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
                      <h3 className="font-bold text-gray-800 mb-3 text-lg">STB Display Updates & Enter Home</h3>
                      <div className="w-full h-64 flex items-center justify-center mb-4 bg-gray-100 rounded-lg">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Default.jpg-v21EtotZ7vG5lHGRbk7PznXDp0Jqfy.jpeg"
                          alt="OneStream Home Screen on TV"
                          className="w-full h-full object-contain rounded-lg shadow-md"
                        />
                      </div>
                      <p className="text-gray-600">
                        The STB display will automatically update indicating successful login through the app, and you
                        will be directed to the Home screen ready to use all STB services.
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
              <Tabs defaultValue="setup-account" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger
                    value="setup-account"
                    className="text-base font-medium py-3 px-6 bg-white border border-gray-200 rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 data-[state=active]:border-blue-200"
                  >
                    Set up your HBO Max account
                  </TabsTrigger>
                  <TabsTrigger
                    value="connect-stb"
                    className="text-base font-medium py-3 px-6 bg-white border border-gray-200 rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600 data-[state=active]:border-blue-200"
                  >
                    Connect via STB
                  </TabsTrigger>
                </TabsList>

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
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2016.14.11_fada2d51.jpg-BVu0phsAQaaMaVcNmA0FwKUDgxSA9B.jpeg"
                              alt="HBO Max Sign In Screen on TV"
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
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2016.14.32_0f550520.jpg-gWqhVeanfcPVKtHBD4DlrOiXUcoGcj.jpeg"
                              alt="HBO Max QR Code and 6-digit Code for Sign In"
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
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2016.15.09_a31e0630.jpg-1yGwqhmqwoqa4GpoVEFvQ09LmLVxwI.jpeg"
                              alt="HBO Max Mobile App Email Input Screen"
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
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2023.12.50_b878ca14.jpg-bKAbNcAVC7QQTJYZG8y7R3yx0rznM7.jpeg"
                              alt="HBO Max Mobile App Password Input Screen"
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
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2016.15.42_ba661ba7.jpg-i9zVKweD6Tl3GuKAYLtcfgxeriMPvc.jpeg"
                              alt="HBO Max Mobile App All Done Confirmation"
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
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2016.16.14_70d00273.jpg-ghfCNM61CmubvntksLNsHxtXuIFFuR.jpeg"
                              alt="HBO Max Profile Selection Screen on TV"
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
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-24%20at%2016.16.33_092edb83.jpg-mdIyQiUt3MmqNsfJIBltHIf71XU4m6.jpeg"
                              alt="HBO Max Home Screen with Content"
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
              </Tabs>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
